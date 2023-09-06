import * as yup from "yup";


export const validationSchema =  yup.object().shape({
  email: yup.string().required("emailは必須です。").email("有効なメールアドレスを入力してください。"),
  password: yup.string().required("パスワードは必須です。").min(8, "パスワードは８文字以上にしてください。")
});
