CREATE TABLE GameResults (
    gameResultId UUID PRIMARY KEY,
    outcome VARCHAR(50) NOT NULL,
    dateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    notes TEXT,
    numberOfTurns INTEGER,
    wentFirst BOOLEAN,
    userStanding INTEGER,

    userId UUID NOT NULL,
    deckId UUID NOT NULL,
    tcgId UUID NOT NULL,
    formatId UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    -- Foreign key constraints linking to other tables
    CONSTRAINT fk_game_result_user
        FOREIGN KEY (userId)
        REFERENCES Users (userId)
        ON DELETE CASCADE,

    CONSTRAINT fk_game_result_deck
        FOREIGN KEY (deckId)
        REFERENCES Decks (deckId)
        ON DELETE CASCADE,

    CONSTRAINT fk_game_result_tcg
        FOREIGN KEY (tcgId)
        REFERENCES TradingCardGames (tcgId)
        ON DELETE CASCADE,

    CONSTRAINT fk_game_result_format
        FOREIGN KEY (formatId)
        REFERENCES Formats (formatId)
        ON DELETE CASCADE
);