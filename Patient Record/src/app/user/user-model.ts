import { Time } from "@angular/common";

export class UserModel {
    constructor(
        public patientname:string,
        public age:number,
        public gender:string,
        public disease:string,
        public patient_in_time:string,
        public patient_out_time:string
    ){}
}
