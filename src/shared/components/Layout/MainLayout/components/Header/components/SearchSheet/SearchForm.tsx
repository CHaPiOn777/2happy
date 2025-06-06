import CloseIcon from "@/shared/components/icons/CloseIcon";
import SearchIcon from "@/shared/components/icons/SearchIcon";
import { Button } from "@/shared/components/UI/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/shared/components/UI/Form";
import { Input } from "@/shared/components/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const searchForm = z.object({
  search: z.string().nonempty(),
});

export type SearchFormInput = z.infer<typeof searchForm>;

const SearchForm = ({
  onSubmit,
}: {
  onSubmit: (data: SearchFormInput) => void;
}) => {
  const form = useForm<SearchFormInput>({
    resolver: zodResolver(searchForm),
    defaultValues: {
      search: "",
    },
  });

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-6 lg:gap-0 lg:flex-row"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => {
            return (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    startIcon={<SearchIcon />}
                    placeholder="Поиск"
                    className="w-full"
                    endIcon={
                      <CloseIcon onClick={() => form.setValue("search", "")} />
                    }
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <Button
          className="px-12 w-full lg:w-max"
          size="normal"
          type="submit"
          disabled={!!form.formState.errors.search}
        >
          Найти
        </Button>
      </form>
    </Form>
  );
};

export default SearchForm;
