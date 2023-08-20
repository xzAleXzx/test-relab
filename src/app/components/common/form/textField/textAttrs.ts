export type Errors = {
    email: string | undefined | null;
    password: string | undefined | null;
}

export interface TextFieldTypes {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: Function;
    error: any;
    isDisabled?: boolean;
}