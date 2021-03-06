const mockedMovies = {
    results: [
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//uAQrHntCccFpvxp75XdQgqexlJd.jpg',
            original_title: 'Luca',
            overview:
                'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg',
            release_date: '2021-06-17',
            title: 'Luca',
            vote_average: 8.3,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280/z2UtGA1WggESspi6KOXeo66lvLx.jpg',
            original_title: 'A Quiet Place Part II',
            overview:
                'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
            release_date: '2021-05-21',
            title: 'A Quiet Place Part II',
            vote_average: 7.3,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
            original_title: 'Cruella',
            overview:
                'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
            release_date: '2021-05-26',
            title: 'Cruella',
            vote_average: 8.5,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//qi6Edc1OPcyENecGtz8TF0DUr9e.jpg',
            original_title: 'The Conjuring: The Devil Made Me Do It',
            overview:
                "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
            poster_path:
                'https://image.tmdb.org/t/p/w1280//xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg',
            release_date: '2021-05-25',
            title: 'The Conjuring: The Devil Made Me Do It',
            vote_average: 8.1,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//wjQXZTlFM3PVEUmKf1sUajjygqT.jpg',
            original_title: 'Infinite',
            overview:
                'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
            release_date: '2021-09-08',
            title: 'Infinite',
            vote_average: 0,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg',
            original_title: 'F9',
            overview:
                "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
            poster_path:
                'https://image.tmdb.org/t/p/w1280//bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
            release_date: '2021-05-19',
            title: 'F9',
            vote_average: 8,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//70AV2Xx5FQYj20labp0EGdbjI6E.jpg',
            original_title: 'Wrath of Man',
            overview:
                "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
            poster_path:
                'https://image.tmdb.org/t/p/w1280//M7SUK85sKjaStg4TKhlAVyGlz3.jpg',
            release_date: '2021-04-22',
            title: 'Wrath of Man',
            vote_average: 7.8,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg',
            original_title: 'Awake',
            overview:
                'After a sudden global event wipes out all electronics and takes away humankind’s ability to sleep, chaos quickly begins to consume the world. Only Jill, an ex-soldier with a troubled past, may hold the key to a cure in the form of her own daughter. The question is, can Jill safely deliver her daughter and save the world before she herself loses her mind.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//uZkNbB8isWXHMDNoIbqXvmslBMC.jpg',
            release_date: '2021-06-09',
            title: 'Awake',
            vote_average: 6.2,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
            original_title: 'Mortal Kombat',
            overview:
                "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
            poster_path:
                'https://image.tmdb.org/t/p/w1280//nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
            release_date: '2021-04-07',
            title: 'Mortal Kombat',
            vote_average: 7.5,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//9WlJFhOSCPnaaSmsrv0B4zA8iUb.jpg',
            original_title: 'Army of the Dead',
            overview:
                'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//z8CExJekGrEThbpMXAmCFvvgoJR.jpg',
            release_date: '2021-05-14',
            title: 'Army of the Dead',
            vote_average: 6.5,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//A0xW7GgeFQoQmPOn7HcHkBQ5nlb.jpg',
            original_title: 'Endangered Species',
            overview:
                'Jack Halsey takes his wife, their adult kids, and a friend for a dream vacation in Kenya. But as they venture off alone into a wilderness park, their safari van is flipped over by an angry rhino, leaving them injured and desperate. Then, as two of them go in search of rescue, a bloody, vicious encounter with a leopard and a clan of hyenas incites a desperate fight for survival.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//6fT8OUMd42N0Jh3lwRf9GAI0X92.jpg',
            release_date: '2021-05-27',
            title: 'Endangered Species',
            vote_average: 6.6,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//jw6ASGRT2gi8EjCImpGtbiJ9NQ9.jpg',
            original_title: 'The Unholy',
            overview:
                'Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//bShgiEQoPnWdw4LBrYT5u18JF34.jpg',
            release_date: '2021-03-31',
            title: 'The Unholy',
            vote_average: 7,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
            original_title: 'Godzilla vs. Kong',
            overview:
                'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
            release_date: '2021-03-24',
            title: 'Godzilla vs. Kong',
            vote_average: 8,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//7JENyUT8ABxcvrcijDBVpdjgCY9.jpg',
            original_title: 'Spiral: From the Book of Saw',
            overview:
                'Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//lcyKve7nXRFgRyms9M1bndNkKOx.jpg',
            release_date: '2021-05-12',
            title: 'Spiral: From the Book of Saw',
            vote_average: 6.4,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//gGSm6ZmWtGazs2H1m0gOp7cx1ZZ.jpg',
            original_title: 'Xtremo',
            overview:
                'Two years after the murder of his son and father, a retired hitman sets in motion a carefully crafted revenge plan against the killer: his own brother.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//cwUhVcDeMYYeu8fq5q1OPOoSbZ7.jpg',
            release_date: '2021-06-04',
            title: 'Xtreme',
            vote_average: 7.2,
        },
        {
            backdrop_path:
                'https://image.tmdb.org/t/p/w1280//fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
            original_title: "Tom Clancy's Without Remorse",
            overview:
                'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
            poster_path:
                'https://image.tmdb.org/t/p/w1280//rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
            release_date: '2021-04-29',
            title: "Tom Clancy's Without Remorse",
            vote_average: 7.2,
        },
    ],
};
