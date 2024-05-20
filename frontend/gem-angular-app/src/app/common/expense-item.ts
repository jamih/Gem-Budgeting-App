export class ExpenseItem {

    constructor(
        public user_id: number,
        public name: string,
        public dateCreated: Date,
        public amount: number,
        public category: string
    ) {

    }
}
