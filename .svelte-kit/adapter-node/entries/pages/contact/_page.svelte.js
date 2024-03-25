import { c as create_ssr_component, f as add_attribute, i as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".contactform.svelte-16uyww0{padding:25vh;display:flex;flex-direction:column;align-items:center}.email-input.svelte-16uyww0,.message-textarea.svelte-16uyww0{width:100%;padding:0.5rem}.message-textarea.svelte-16uyww0{height:200px}.submit-button.svelte-16uyww0{padding:10px 20px;cursor:pointer}.error-message.svelte-16uyww0{color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  $$result.css.add(css);
  return `<div class="contactform svelte-16uyww0"><form><input type="email" required placeholder="Twój email" class="email-input svelte-16uyww0"${add_attribute("value", email, 0)}> <textarea required placeholder="Twoja wiadomość" class="message-textarea svelte-16uyww0">${escape("")}</textarea> <button type="submit" class="submit-button svelte-16uyww0" data-svelte-h="svelte-1iv024r">Wyślij</button> ${``}</form> </div>`;
});
export {
  Page as default
};
