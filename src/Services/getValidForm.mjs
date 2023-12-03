// Funciones para validar campos obligatorios y requerimentos de los formularios

export const getValidateForm = (formData) => {
    const values = Object.values(formData);
    const isComplete = values.every(value => !!value);
    return isComplete;
};

export const getValidateEmail = (email) => {
    const isValid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email);
    return isValid;
};

export const getValidatePhone = (phone) => {
    const isValid = /^\d{8,}$/.test(phone);
    return isValid;
};

export const getValidatePassword = (password) => {
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(password);
    return isValid;
};
