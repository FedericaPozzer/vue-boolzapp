
// MILESTONE 1
    // * Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e dall’interlocutore(bianco) assegnando due classi CSS diverse
        // ? ok!
    // * Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto
        // ? ok!

// MILESTONE 2
    // * Visualizzazione dinamica dei messaggi: tramite la direttiva v -for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
        // ? ok!
    // * Click sul contatto mostra la conversazione del contatto cliccato
        // ? ok!

// MILESTONE 3
    // * Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
        // ? ok!
    // * Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
        // ? ok!

// MILESTONE 4
    // * Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
        // ? ok!

// MILESTONE 5 - opzionale
    // * Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
    // * Visualizzazione ora e ultimo messaggio inviato / ricevuto nella lista dei contatti
        // ? ok!




const app = Vue.createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            text: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            text: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
            ],

            // indice "di partenza"
            selected_index : 0,

            // coso vuoto in cui andrà il mio nuovo messaggio
            new_msg : {
                date : '15/02/2023 17:15:00',
                text : '',
                status : 'sent'
            },

            // per la mia funzione di ricerca
            research : {
                text : "",
                // visible : true,
            }
        }
    },

    methods : {
        // funzione per selezionare il contatto
        selectedContact(i) {
                // alert("click" + " " + i);
            this.selected_index = i;
        }, // senza creare questa funzione potevo anche scrivere nell'html che on click "i = selected_index" e bom.


        // funzione per mandare un nuovo messaggio
        sendMsg() {
            // console.log(this.new_msg); // proxy

            // trasfromazione in un non-proxy
            const copy_notProxy = {
                ...this.new_msg,
            }

            // magia nera
            let ciao = this.contacts[this.selected_index];
            ciao.messages.push(copy_notProxy);

            // la risposta di tizio, dopo un secondo dal mio messaggio!
            setTimeout(() => {
                ciao.messages.push({
                    date : "15/02/2023 17:15:01",
                    text : "Ok!",
                    status : "received"
                });
            }, 1000);


            // svuoto la input bar quando invio
            this.new_msg.text = "";
            
        },

        // funzione per cercare tra i contatti - sia con la lente che premendo invio 
        researchFunction() {
            // alert("I'm searching" + this.research.text); -- ok!
            
            for (contact of this.contacts) {

                    // add toLowerCase() in the comparison to kill case sensitivity
                if (contact.name.toLowerCase().includes(this.research.text.toLowerCase())) {
                    // console.log("ho trovato ciò che cerchi!");
                    contact.visible = true;

                } else {
                    // console.log("nope");
                    contact.visible = false;
                }
            }

            // svuoto la input bar quando invio
            this.research.text = "";
        },

        // funzione per aprire la tendina al click del singolo messaggio
        dropDownMenu() {
            alert("clicked!");
        },
    }
})
app.mount("#my-app");
