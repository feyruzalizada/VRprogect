// where a service card's button leads; the message names the chosen service
export const contact = {
  whatsapp: "994502005121",
  // "Zəng et" shows on touch screens only
  phone: "+994502005121",
  callLabel: "Zəng et",
  // TODO: Gmail address from the client; the Gmail option stays hidden while this is empty
  email: "",
  message: (service: string) => `Salam! «${service}» xidməti ilə maraqlanıram.`,
  chooseLabel: "Necə əlaqə saxlayaq?",
};
