
export interface IStaff {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export  interface IStaffProps {
    staff: IStaff
}

export interface IStaffsResponse {
    data: {
        data: IStaff[];
        total_pages: number;
    };
}

export interface IStaffResponse {
    data: {
        data: IStaff;
    };
}