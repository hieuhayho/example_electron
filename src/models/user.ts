import {FacebookInitData} from "./facebook-init-data";

export class User {
    private _id: number;
    private _userId: string;
    private _cookie: string;
    private _userAgent: string;
    private _accountName: string;
    private _location: string;
    private _birthday: string;
    private _facebookInitData: FacebookInitData;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get cookie(): string {
        return this._cookie;
    }

    set cookie(value: string) {
        this._cookie = value;
    }

    get userAgent(): string {
        return this._userAgent;
    }

    set userAgent(value: string) {
        this._userAgent = value;
    }

    get accountName(): string {
        return this._accountName;
    }

    set accountName(value: string) {
        this._accountName = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get facebookInitData(): FacebookInitData {
        return this._facebookInitData;
    }

    set facebookInitData(value: FacebookInitData) {
        this._facebookInitData = value;
    }
}
