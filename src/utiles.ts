class Utiles {
  private primaryColor: string;
  private secondaryColor: string;
  private bgGradient: string;
  constructor() {
    this.primaryColor = "#F9B16E";
    this.secondaryColor = "#F68080";
    this.bgGradient = `linear(to-t, ${this.primaryColor}, ${this.secondaryColor})`;
  }
  public getPrimaryColor() {
    return this.primaryColor;
  }
  public getSecondaryColor() {
    return this.secondaryColor;
  }
  public getBgGradient() {
    return this.bgGradient;
  }

  public getStoreTemplates() {
    const storesList = [
      // {
      //   id: 1,
      //   url: "https://apps.apple.com/fr/app/mystery-mailbox/id6446809058",
      //   image: "/apple_store.avif",
      //   alt: "apple_store",
      //   title: "Télécharger pour iOS",
      //   description: "Obtenez Mystery Mailbox sur l'Apple store",
      //   buttonTexte : "Télécharger pour iOS"
      // },
      // {
      //   id: 2,
      //   url: "https://play.google.com/store/apps/details?id=com.mysterymailbox",
      //   image: "/google_play.avif",
      //   alt: "google_play",
      //   title: "Télécharger pour Android",
      //   description: "Obtenez Mystery Mailbox sur Google play",
      //   buttonTexte : "Télécharger pour Android"
      // },
      {
        id: 3,
        url: "/apk/MysteryMailbox.apk",
        image: "/apk.png",
        alt: "apk",
        title: "Télécharger l'APK pour Android",
        description: "Telecharger Mystery Mailbox en utilisant Android APK",
        buttonTexte : "Télécharger l'APK"
      },
    ];
    return storesList;
  }
}

export default Utiles;
