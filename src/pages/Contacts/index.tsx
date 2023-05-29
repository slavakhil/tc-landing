import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Title } from "../../components/UI/Title";
import { data } from "../../data/data";
import "./contacts.scss";
import InputMask from "react-input-mask";
import axios from "axios";
import { toast } from "react-toastify";

interface IFormInputs {
  name: string;
  email: number;
  phone: string;
  company: string;
  comment: string;
}

// eslint-disable-next-line no-useless-escape
const phoneRegExp = /^[\d\+][\d\(\)\ -]{4,18}\d$/;

const schema = yup
  .object({
    name: yup.string().required("Поле не заполнено"),
    email: yup
      .string()
      .email("Введите электронную почту правильно")
      .required("Поле не заполнено"),
    phone: yup
      .string()
      .required("Поле не заполнено")
      .matches(phoneRegExp, "Некорректный ввод"),
    company: yup.string(),
    comment: yup.string(),
  })
  .required();

export const Contacts: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

  const onSubmit = async (data: IFormInputs) => {
    setIsMessageSent(true);
    const id = toast.loading("Ваши контакты отправляются..");
    await axios
      .post("https://akiremik.beget.app/mail", { data })
      .then(() => {
        toast.update(id, {
          render: "Контакты были успешно отправлены!",
          autoClose: 5000,
          type: "success",
          position: "bottom-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          isLoading: false,
        });
      })
      .finally(() => setIsMessageSent(false))
      .catch(() => {
        toast.update(id, {
          render: "Контакты не были отправлены. Попробуйте позже.",
          type: "error",
          isLoading: false,
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const dataContacts = data.contacts;

  return (
    <div id="contacts" className="contacts-container">
      <Title text={dataContacts.title} />
      <form onSubmit={handleSubmit(onSubmit)} className="contacts-form">
        <div className="inp-container">
          <label className="lbl" id={dataContacts.inputs[0].id}>
            {dataContacts.inputs[0].label}
            <span style={{ color: "#BD0000" }}>*</span>
          </label>
          <div></div>
          <input
            id={dataContacts.inputs[0].id}
            placeholder={dataContacts.inputs[0].placeholder}
            className={
              errors.name?.message === undefined ? "inp" : "inp inp-error"
            }
            {...register("name")}
          />
          <div className="error-message">{errors.name?.message}</div>
        </div>

        <div className="inp-container">
          <label className="lbl" id={dataContacts.inputs[1].id}>
            {dataContacts.inputs[1].label}
            <span style={{ color: "#BD0000" }}>*</span>
          </label>
          <div></div>
          <input
            id={dataContacts.inputs[1].id}
            placeholder={dataContacts.inputs[1].placeholder}
            className={
              errors.email?.message === undefined ? "inp" : "inp inp-error"
            }
            {...register("email")}
          />
          <div className="error-message">{errors.email?.message}</div>
        </div>

        <div className="inp-container">
          <label className="lbl" id={dataContacts.inputs[2].id}>
            {dataContacts.inputs[2].label}
            <span style={{ color: "#BD0000" }}>*</span>
          </label>
          <div></div>
          <InputMask
            mask="+7 (999) 999-99-99"
            id={dataContacts.inputs[2].id}
            placeholder={dataContacts.inputs[2].placeholder}
            className={
              errors.phone?.message === undefined ? "inp" : "inp inp-error"
            }
            {...register("phone")}
          />
          <div className="error-message">{errors.phone?.message}</div>
        </div>

        <div className="inp-container">
          <label className="lbl" id={dataContacts.inputs[3].id}>
            {dataContacts.inputs[3].label}
          </label>
          <div></div>
          <input
            id={dataContacts.inputs[3].id}
            placeholder={dataContacts.inputs[3].placeholder}
            className={
              errors.company?.message === undefined ? "inp" : "inp inp-error"
            }
            {...register("company")}
          />
          <div className="error-message">{errors.company?.message}</div>
        </div>

        <div className="inp-container">
          <label className="lbl" id={dataContacts.inputs[4].id}>
            {dataContacts.inputs[4].label}
          </label>
          <div></div>
          <textarea
            id={dataContacts.inputs[4].id}
            placeholder={dataContacts.inputs[4].placeholder}
            className={
              errors.comment?.message === undefined
                ? "inp inp-comm"
                : "inp inp-comm inp-error"
            }
            {...register("comment")}
          />
          <div className="error-message">{errors.comment?.message}</div>
        </div>

        <div className="submit-form">
          <input className="btn-2" type="submit" disabled={isMessageSent} />
          <div className="contacts-info">{dataContacts.info}</div>
        </div>
      </form>
    </div>
  );
};
