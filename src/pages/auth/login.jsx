// import React, { useCallback, useRef, useState } from "react"
// import Logo from "../../components/shared/Logo"
// import Button from "../../components/shared/Button"
// import Link from "next/link"
// import {
//   IoEyeOff,
//   IoEyeSharp,
//   AiOutlineLoading3Quarters,
// } from "../../components/shared/Icons"
// import { cn } from "../../utils/helperFunctions"
// import { signup } from "../../utils/apis"
// import { useRouter } from "next/router"
// import formFields1 from "../../../public/formFields1"
// import InputField, { PasswordField } from "../../components/InputField"
// import { useForm } from "react-hook-form"
// import { SignupSchema } from "../../utils/validationSchema"
// import { yupResolver } from "@hookform/resolvers/yup"
// import { DevTool } from "@hookform/devtools"

// // //TODO: Validate form
// // //TODO: Check loading state
// // ... (existing imports)

// const Login = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [serverError, setServerError] = useState(null);
//   const [isInputDirty, setIsInputDirty] = useState(false); // New state to track input dirtiness

//   const { register, handleSubmit, formState, control } = useForm({
//     resolver: yupResolver(SignupSchema),
//     mode: "onTouched",
//   });

//   const { errors, isValid } = formState;

//   const onSubmit = (data) => {
//     setIsLoading(true);
//     signup(data).then((res) => {
//       setIsLoading(false);
//       if (res.message) {
//         setServerError(res.message);
//         return;
//       }
//       setServerError(null);
//       localStorage.setItem("token", res.token);
//       router.push("/");
//     });
//   };

//   const handleInputChange = () => {
//     setIsInputDirty(true);
//   };

//   return (
//     <main className="flex h-full w-full items-center justify-center px-6">
//       <div className="flex w-[400px] flex-col items-center gap-4 rounded p-2">
//         <div className="flex flex-col items-center gap-1">
//           <h1 className="text-2xl font-bold">
//             Welcome to <Logo />
//           </h1>
//           <p className="text-gray-600">Please login to continue</p>
//         </div>
//         {!isLoading && (
//           <p className="text-sm text-destructive">{serverError}</p>
//         )}
//         <form
//           className="flex w-full flex-col items-center gap-4"
//           onSubmit={handleSubmit(onSubmit)}
//           noValidate
//         >
//           {formFields1.map((field) => {
//               if (field.type === "password")
//                 return (
//                   <PasswordField
//                     key={field.name}
//                     register={(e) => {
//                       register(e);
//                       handleInputChange(); // Triggered on password input change
//                     }}
//                     label={field.label}
//                     name={field.name}
//                     errorMsg={errors[field.name]?.message}
//                     id={field.id}
//                     placeholder={field.placeholder}
//                   />
//                 );
//               return (
//                 <InputField
//                   key={field.name}
//                   register={(e) => {
//                     register(e);
//                     handleInputChange(); // Triggered on email input change
//                   }}
//                   label={field.label}
//                   name={field.name}
//                   errorMsg={errors[field.name]?.message}
//                   id={field.id}
//                   placeholder={field.placeholder}
//                 />
//               );
//             })}
//           <Button
//             type="submit"
//             className={cn("w-full", {
//               "cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground":
//                 !isInputDirty || isLoading || !isValid,
//             })}
//             disabled={!isInputDirty || isLoading || !isValid}
//           >
//             {isLoading ? (
//               <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
//             ) : (
//               "Login"
//             )}
//           </Button>
//         </form>

//         <Link href={"/auth/signup"}>
//           <p className="text-md text-primary">
//             create an account? <span className="font-bold">signup</span>
//           </p>
//         </Link>
//       </div>
//     </main>
//   );
// };

// export default Login;





import React, { /*useCallback, useRef,*/ useState } from "react"
import Logo from "../../components/shared/Logo"
import Button from "../../components/shared/Button"
import Link from "next/link"
import {
  /*
  IoEyeOff,
  IoEyeSharp,
  */
  AiOutlineLoading3Quarters,
  
} from "../../components/shared/Icons"
import { cn } from "../../utils/helperFunctions"
import { login } from "../../utils/apis"
import { useRouter } from "next/router"
import formFields1 from "../../../public/formFields1"
import InputField, { PasswordField } from "../../components/InputField"
import { useForm } from "react-hook-form"
import { LoginSchema } from "../../utils/validationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { DevTool } from "@hookform/devtools"

//TODO: Validate form
//TODO: Check loading state

const Login = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [serverError, setServerError] = useState(null)
    const { register, handleSubmit, formState, control } = useForm({
      resolver: yupResolver(LoginSchema),
      mode: "onTouched",
    })
    const { errors, isValid } = formState
    const onSubmit = (data) => {
      setIsLoading(true)
      login(data).then((res) => {
        setIsLoading(false)
        if(res.message){
          setServerError(res.message)
          return
        }
        setServerError(null)
        localStorage.setItem("token", res.token)
        router.push("/")
      })
    }
  
    return (
      <main className="flex h-full w-full items-center justify-center px-6">
        <div className="flex w-[400px] flex-col items-center gap-4 rounded p-2">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl font-bold">
              Welcome to <Logo />
            </h1>
            <p className="text-gray-600">Please login to continue</p>
          </div>
          {!isLoading && (
            <p className="text-sm text-destructive">{serverError}</p>
          )}
          <form
            className="flex w-full flex-col items-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {formFields1.map((field) => {
                if (field.type === "password")
                  return (
                    <PasswordField
                      key={field.name}
                      register={register}
                      label={field.label}
                      name={field.name}
                      errorMsg={errors[field.name]?.message}
                      id={field.id}
                      placeholder={field.placeholder}
                    />
                  );
                return (
                  <InputField
                    key={field.name}
                    register={register}
                    label={field.label}
                    name={field.name}
                    errorMsg={errors[field.name]?.message}
                    id={field.id}
                    placeholder={field.placeholder}
                  />
                );
              })}
            <Button
              type="submit"
              className={cn("w-full", {
                "cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground":
                 !isValid || isLoading,
              })}

              // that means that if the field isnot valid and still loading then the tailwind css applied 
              // the cn function is to merge the tailwind css with conditions 

              disabled={!isValid}
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
              ) : (
                "Login"
              )}
            </Button>
          </form>
  
          <Link href={"/auth/signup"}>
            <p className="text-md text-primary">
              create an account? <span className="font-bold">signup</span>
            </p>
          </Link>
        </div>
      </main>
    );
  };
  
  export default Login;
  