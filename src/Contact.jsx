import emailjs from "emailjs-com";

export function Contact() {
  emailjs.init("sAZB8VbdMaitSOQM-");

  function sendEmail(e) {
    e.preventDefault();
    const params = {
      from_name: e.target.elements.name.value,
      email_id: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };
    emailjs
      .send("service_917op3r", "template_o80cp16", params)
      .then(function (res) {
        alert("E-mail sent successfully.");
      });

    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
  }

  return (
    <div id="contact" className="md:w-5/6 mx-auto py-12">
      <h2 className="w-fit font-marlinge md:text-5xl text-3xl md:my-10 my-5 text-primary-content bg-primary p-4 text-center mx-auto md:mx-0 md:text-start">
        CONTATO
      </h2>
      <div className="bg-base-300 p-4 py-10 my-10 rounded-sm w-full">
        <h3 className="text-center text-lg my-4 font-marlinge text-primary">
          Entre em contato!
        </h3>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-5 m-auto md:w-1/3"
        >
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label font-marlinge">
                <span className="label-text">Seu nome</span>
              </label>
              <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full rounded-none"
                id="name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-marlinge">
                <span className="label-text">E-mail*</span>
              </label>
              <input
                type="email"
                placeholder="user@gmail.com"
                className="input input-bordered w-full rounded-none"
                id="email"
                required
              />
            </div>
          </div>
          <div>
            <label className="label font-marlinge">
              <span className="label-text">Sua mensagem*</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full py-5 rounded-none"
              placeholder="Sou recrutador(a) e adorariamos te ter no nosso time..."
              required
              id="message"
            ></textarea>
          </div>
          <button className="btn btn-outline btn-primary w-1/2 mx-auto rounded-none my-4">
            Enviar
          </button>
        </form>
        <div className="md:place-self-center md:justify-self-end w-fit mx-auto">
          <div className="grid grid-flow-col gap-4">
            <a
              className="btn btn-outline btn-primary rounded-full border-none"
              href="https://www.linkedin.com/in/marcoos-melloo/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="btn btn-outline btn-primary rounded-full border-none"
              href="https://github.com/marcosmelo0"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12,.3C5.4.3 0 5.7 0 12.3c0 5.4 3.5 10 8.4 11.6.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.4 3.5 1.1.1-.8.4-1.4.8-1.7-2.8-.3-5.7-1.4-5.7-6.3 0-1.4.5-2.6 1.2-3.5-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c2.2-1.6 3.2-1.3 3.2-1.3.6 1.7.2 3 0 3.3.7.9 1.2 2.1 1.2 3.5 0 4.9-2.9 6-5.7 6.3.5.4.8 1.2.8 2.3v3.5c0 .3.2.7.8.6 4.9-1.6 8.4-6.2 8.4-11.6C24 5.7 18.6.3 12 .3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
