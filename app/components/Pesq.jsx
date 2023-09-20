import { useForm } from "react-hook-form";

export default function Pesq(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.filtrarAnime(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="search-bar rounded-full flex items-center mr-4">
        <input
          type="text"
          placeholder="Pesquisar"
          className="px-2 py-1 rounded-full text-orange-400"
          {...register("pesq")}
        />
        <button type="submit">Pesquisar</button>
        <button type="button" onClick={props.ordenarNota}>
          Ordem
        </button>
      </div>
    </form>
  );
}
