import Input from "./components/common/Form/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      user: yup.string().required("Ups! Necesitamos tu usuario para continuar"),
    })
    .required("Ups! Necesitamos que llenes los campos");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/chat");
    }
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("user", data.user);
    redirect();
  };
  const redirect = () => {
    navigate("/chat");
  };

  return (
    <div className="flex justify-center items-center bg-[#282c34] min-h-screen">
      {!localStorage.getItem("user") ? (
        <div className="w-full p-5 xl:w-3/4 lg:w-11/12 flex items-center justify-center">
          <div className="w-full lg:w-7/12 bg-white p-2 rounded-lg lg:rounded">
            <div className="px-8 mb-2 text-center">
              <h3 className="pt-4 mb-2 text-2xl">Login</h3>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4">
                <Input
                  label="User"
                  name="user"
                  placeholder="Edwin"
                  errors={errors.user}
                  register={register}
                />
                <div className="flex items-center justify-center mt-5">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p className="text-5xl font-bold text-white">Ya estas logeado</p>
      )}
    </div>
  );
}

export default App;
