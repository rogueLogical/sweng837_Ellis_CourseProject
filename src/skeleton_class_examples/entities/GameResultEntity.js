const GameOutcome = {
    WIN: 'Win',
    LOSS: 'Loss',
    DRAW: 'Draw'
};

class GameResult {
    /**
     * Represents the outcome and details of a single game played.
     * @param {object} params
     * @param {string} params.gameResultId
     * @param {GameOutcome} params.outcome
     * @param {Date} params.dateTime
     * @param {string | null} [params.notes=null]
     * @param {number | null} [params.numberOfTurns=null]
     * @param {boolean | null} [params.wentFirst=null]
     * @param {number | null} [params.userStanding=null]
     * @param {string} params.userId
     * @param {string} params.deckId
     * @param {string} params.tcgId
     * @param {string} params.formatId 
     */
    constructor(params) {
        this._gameResultId = params.gameResultId; // Assuming ID is provided on creation
        this._outcome = params.outcome;
        this._dateTime = params.dateTime;
        this._notes = params.notes || null;
        this._numberOfTurns = params.numberOfTurns || null;
        this._wentFirst = params.wentFirst || null;
        this._userStanding = params.userStanding || null;
        this._userId = params.userId;
        this._deckId = params.deckId;
        this._tcgId = params.tcgId;
        this._formatId = params.formatId;
    }

    /**
     * Gets the unique identifier for the game result.
     * @returns {string}
     */
    get gameResultId() {
        return this._gameResultId;
    }

    /**
     * Gets the outcome of the game for the recording user.
     * @returns {GameOutcome}
     */
    get outcome() {
        return this._outcome;
    }

    /**
     * Gets the date and time the game was played.
     * @returns {Date}
     */
    get dateTime() {
        return this._dateTime;
    }

    /**
     * Gets the optional notes about the game.
     * @returns {string | null}
     */
    get notes() {
        return this._notes;
    }

    /**
     * Gets the optional number of turns the game lasted.
     * @returns {number | null}
     */
    get numberOfTurns() {
        return this._numberOfTurns;
    }

    /**
     * Gets whether the user went first.
     * @returns {boolean | null}
     */
    get wentFirst() {
        return this._wentFirst;
    }

    /**
     * Gets the user's final standing in multiplayer games.
     * @returns {number | null}
     */
    get userStanding() {
        return this._userStanding;
    }

    /**
     * Gets the ID of the user who recorded the result.
     * @returns {string}
     */
    get userId() {
        return this._userId;
    }

    /**
     * Gets the ID of the user's deck used.
     * @returns {string}
     */
    get deckId() {
        return this._deckId;
    }

    /**
     * Gets the ID of the Trading Card Game played.
     * @returns {string}
     */
    get tcgId() {
        return this._tcgId;
    }

    /**
     * Gets the ID of the Format played.
     * @returns {string}
     */
    get formatId() {
        return this._formatId;
    }
}
