import { DESCRIPTION_LIMIT } from './../config'

export const truncateString = (str, maxLength=DESCRIPTION_LIMIT) => {
    return (str && str.length) > maxLength ? `${str.substring(0, maxLength)}...` : str
}

export const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}