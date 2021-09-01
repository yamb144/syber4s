function guessCity(capital, coastal, famous, ancient) {
    if (capital) return "Jerusalem"
    if (coastal) {
        if (ancient) return "Acre"
        else if (famous) return "Tel Aviv"
        else return "Zikim"
    }
    else if (ancient) return "Kazrin"
    return "Musmus"
}

guessCity (true,false,false,false) ;