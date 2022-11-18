import { Fragment, useEffect, useState, useRef } from "react";
import { RiMessage2Line } from "react-icons/ri";

import {
  User,
  InfoGroup,
  SendMessage,
  Divider,
  MessageUser,
  SearchChats,
  Message,
} from "../components/chat";

const InitialChat = [
  {
    name: "APEU",
    src: "https://c8.alamy.com/compes/pr9bj3/dibujos-animados-icono-de-gente-de-color-en-el-comic-de-estilo-la-gente-ilustracion-pictograma-los-usuarios-persona-splash-concepto-empresarial-pr9bj3.jpg",
    messages: ["Hola, Bienvenido al chat de Edwin"],
    main: false,
  },
];

import io from "socket.io-client";

const socket = io("https://chat-production-f865.up.railway.app");

const Chat = () => {
  const chatRef = useRef(null);

  const [chats, setChats] = useState(InitialChat);

  const [userMessage, setUserMessage] = useState("");

  const [lastMessage, setLastMessage] = useState("¿En que te puedo ayudar?");

  const setMessage = ({ message, user }) => {
    if (user !== localStorage.getItem("user")) {
      setChats((prev) => [
        ...prev,
        {
          name: user,
          src: "https://c8.alamy.com/compes/pr9bj3/dibujos-animados-icono-de-gente-de-color-en-el-comic-de-estilo-la-gente-ilustracion-pictograma-los-usuarios-persona-splash-concepto-empresarial-pr9bj3.jpg",
          messages: [message],
          main: false,
        },
      ]);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    socket.on("chat:mensaje", setMessage);

    return () => {
      socket.off("chat:mensaje", setMessage);
    };
  });

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <>
      <main className="flex  h-screen grid-cols-1 bg-white pr-12 pt-20 dark:bg-[#22222A] lg:grid-cols-[30%,1fr]">
        <section className={` transition-all md:w-1/3 lg:w-1/3`}>
          <SearchChats />
          <div className="h-[66vh] max-w-full overflow-y-scroll py-5 scrollbar-default scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-thumb-gray-700 md:pr-10 md:pl-6">
            <User
              name="APEU"
              active={true}
              img="https://c8.alamy.com/compes/pr9bj3/dibujos-animados-icono-de-gente-de-color-en-el-comic-de-estilo-la-gente-ilustracion-pictograma-los-usuarios-persona-splash-concepto-empresarial-pr9bj3.jpg"
              lastMessage={lastMessage}
              isTyping={false}
              time="4:30 PM"
            />
            <h5 className="my-8 flex items-center gap-2 dark:text-gray-300">
              <RiMessage2Line /> All messages
            </h5>
          </div>
        </section>

        <section className="flex h-[89vh] w-full flex-col bg-gray-50  dark:bg-[#1E1F24]">
          <InfoGroup name="Astudillo Perez Edwin Uriel" />

          <div className="h-full overflow-y-scroll py-5 px-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full ">
            <Divider />
            {chats.map(({ name, src, messages, main }, index) => (
              <MessageUser name={name} src={src} key={index} main={main}>
                {messages.map((message, index) => (
                  <Message key={index} main={main}>
                    {message}
                  </Message>
                ))}
              </MessageUser>
            ))}
            <div ref={chatRef} />
          </div>
          <SendMessage setChats={setChats} setUserMessage={setUserMessage} />
        </section>
      </main>
    </>
  );
};

export default Chat;
