// where a service card's button leads; the message names the chosen service
export const contact = {
  whatsapp: "994502005121",
  // TODO: Gmail address from the client; the Gmail option stays hidden while this is empty
  email: "",
  message: (service: string) => `Salam! «${service}» xidməti ilə maraqlanıram.`,
  chooseLabel: "Necə əlaqə saxlayaq?",
};
