import {
  MutationOptions,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { formattedApiInstance } from "./formattedApiInstance";
import { AuthResponse, GoogleAuthResponse, UserData } from "@/shared/types/api";
import { z } from "zod";
import { useAuthStore } from "@/shared/store/authStore";
import Cookies from "js-cookie";
import { getCartQueryOptions } from "@/features/Cart/api/cartQueries";
import { getFavoriteQueryOptions } from "@/features/Favorite/api/favoriteQueries";
import { requestQueue } from "./requestQueue";
import { env } from "@/config/env";
import { AxiosError } from "axios";

export const getUserURL = "/wp/v2/users/me";

export const getUser = async (): Promise<UserData> => {
  const response = await requestQueue.addRequest(
    () => formattedApiInstance.get<unknown, UserData>(getUserURL),
    "medium"
  );

  return response;
};

const userQueryKey = ["user"];

export const getUserQueryOptions = () => {
  return queryOptions({
    queryKey: userQueryKey,
    queryFn: getUser,
  });
};

export const useUser = () => {
  const userToken = useAuthStore((state) => state.userToken);
  return useQuery({
    ...getUserQueryOptions(),
    enabled: !!userToken,
    retry: false,
  });
};

export const useLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  const setAccessToken = useAuthStore((state) => state.setUserToken);
  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ token }) => {
      Cookies.set("access_token", token, { expires: 5 });
      setAccessToken(token);
      queryClient.invalidateQueries(getFavoriteQueryOptions());
      queryClient.invalidateQueries(getUserQueryOptions());
      queryClient.invalidateQueries(getCartQueryOptions());
      onSuccess?.();
    },
    onError: onError,
  });
};

export const loginInputSchema = z.object({
  email: z.string().email("Неверный email"),
  password: z.string().min(8, "Пароль должен содержать не менее 8 символов"),
  remember: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

const loginUser = (data: LoginInput): Promise<AuthResponse> => {
  const modifiedData = { username: data.email, password: data.password };
  return formattedApiInstance.post<
    unknown,
    AuthResponse,
    { username: string; password: string }
  >("/jwt-auth/v1/token", modifiedData);
};

export const useRegister = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();
  const setAccessToken = useAuthStore((state) => state.setUserToken);
  return useMutation({
    mutationFn: registerUser,
    onSuccess: ({ token }) => {
      Cookies.set("access_token", token, { expires: 5 });
      setAccessToken(token);
      queryClient.invalidateQueries(getUserQueryOptions());
      queryClient.invalidateQueries(getCartQueryOptions());
      onSuccess?.();
    },
  });
};

export const registerInputSchema = z
  .object({
    name: z
      .string()
      .min(1, "Введите имя")
      .refine(
        (val) => val.trim().length > 0,
        "Имя не может состоять из пробелов"
      ),
    email: z.string().email("Неверный Email"),
    password: z
      .string()
      .min(8, "Пароль должен содержать не менее 8 символов")
      .regex(/[A-Za-z]/, "Пароль должен состоять из латинских букв")
      .regex(
        /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
        "Пароль должен содержать хотя бы одну цифру или специальный символ"
      ),
    repeatPassword: z.string().min(1, "Заполните поле"),
    politic: z.boolean().refine((value) => value === true, {
      message: "Вы должны принять политику конфиденциальности",
    }),
    notifications: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["repeatPassword"],
      });
    }
  });

export type RegisterInput = Omit<
  z.infer<typeof registerInputSchema>,
  "politic" | "repeatPassword"
>;

const registerUser = (data: RegisterInput): Promise<AuthResponse> => {
  return formattedApiInstance.post("/custom/v1/register", data);
};

export const resetPasswordMailInputSchema = z.object({
  email: z.string().email("Неверный email"),
});

export type ResetPasswordMailInput = z.infer<
  typeof resetPasswordMailInputSchema
>;

const sendResetPasswordMailURL = `${env.CUSTOM_API}/request-password-reset`;

export const sendResetPasswordMail = (
  data: ResetPasswordMailInput
): Promise<{ success: boolean }> => {
  return formattedApiInstance.post(sendResetPasswordMailURL, data);
};

export const useSendResetPasswordMail = ({
  onSuccess,
  onError,
}: MutationOptions<{ success: boolean }, Error, ResetPasswordMailInput>) => {
  return useMutation({
    mutationFn: sendResetPasswordMail,
    onSuccess,
    onError,
  });
};

export const resetPasswordInputSchema = z
  .object({
    password: z
      .string()
      .min(8, "Пароль должен содержать не менее 8 символов")
      .regex(/[A-Za-z]/, "Пароль должен состоять из латинских букв")
      .regex(
        /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
        "Пароль должен содержать хотя бы одну цифру или специальный символ"
      ),
    repeatPassword: z.string().min(1, "Заполните поле"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["repeatPassword"],
      });
    }
  });

export type ResetPasswordInput = z.infer<typeof resetPasswordInputSchema>;

export type ResetBodyType = {
  password: string;
  key: string;
  login: string;
};

const resetPasswordURL = `${env.CUSTOM_API}/reset-password`;

export const resetPassword = (
  data: ResetBodyType
): Promise<{ success: boolean }> => {
  return formattedApiInstance.post(resetPasswordURL, data);
};

export const useResetPassword = ({
  onSuccess,
  onError,
  ...props
}: MutationOptions<{ success: boolean }, Error, ResetBodyType>) => {
  return useMutation({
    mutationFn: resetPassword,
    onSuccess,
    onError,
    ...props,
  });
};

export const useGetToken = () => {
  const { data: user } = useUser();

  const { mutate } = useLogin({});

  const getToken = (password: string) => {
    if (!user) return;
    mutate({ email: user?.email, password });
  };

  return getToken;
};

const googleLoginUserURL = `${env.CUSTOM_API}/google-login`;

const googleLoginUser = (accessToken: string): Promise<GoogleAuthResponse> => {
  return formattedApiInstance.post<
    unknown,
    GoogleAuthResponse,
    { access_token: string }
  >(googleLoginUserURL, {
    access_token: accessToken,
  });
};

export const useGoogleLogin = ({
  onSuccess,
  onError,
  ...props
}: MutationOptions<
  GoogleAuthResponse,
  AxiosError<{ code: string; message: string }>,
  string
>) => {
  const queryClient = useQueryClient();
  const setAccessToken = useAuthStore((state) => state.setUserToken);
  return useMutation<
    GoogleAuthResponse,
    AxiosError<{ code: string; message: string }>,
    string
  >({
    mutationFn: googleLoginUser,
    onSuccess: (data, variables, context) => {
      Cookies.set("access_token", data.token, { expires: 5 });
      setAccessToken(data.token);
      queryClient.invalidateQueries(getUserQueryOptions());
      queryClient.invalidateQueries(getCartQueryOptions());
      onSuccess?.(data, variables, context);
    },
    onError: (err, variables, context) => {
      onError?.(err, variables, context);
    },
    ...props,
  });
};
