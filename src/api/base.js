import service from "../utils/request";

export const getPet = ({ id = '' }) =>
    service(
        {
            method: 'get',
            url: `/pet/${id}`,
            params: {
            }
        }
    )