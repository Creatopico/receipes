MoreJSEvents.playerStartTrading((event) => {
    // We don't have the stage, so no trades for us :(
    event.forEachOffers((o, i) => {
            o.disabled = true;
    })
});