class user {
    constructor(name, classes, schedule) {
        this.name = name;
        this.classes = classes;
        this.schedule = schedule;
    }

    get userVector() {
        return this.classes;
    }


}