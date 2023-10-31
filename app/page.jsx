import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  return (
    <div className="relative flex">
      <div>
        <img src="./jujutsu.png" alt="jujutsu" className="min-h-screen" />
      </div>
      <div className="flex flex-col absolute ml-10 w-4/12 top-16">
        <img src="./Jujutsu_Kaisen.png" alt="logoJujutsu" />
        <div className="text-red-700">
          <p className="text-white text-1xl font-semibold mt-2">
            <strong>
              “Sofrimento, arrependimento, vergonha: os sentimentos negativos
              dos humanos tornam-se Maldições, causando terríveis acidentes que
              podem levar até mesmo à morte. E pra piorar, Maldições só podem
              ser exorcizadas por outras Maldições. Certo dia, para salvar
              amigos que estavam sendo atacados por Maldições, Yuji Itadori
              engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então
              decide se matricular no Colégio Técnico de Feitiçaria de Tóquio,
              uma organização que combate as Maldições... e assim começa a
              heróica lenda do garoto que tornou-se uma Maldição para exorcizar
              uma Maldição.”
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
