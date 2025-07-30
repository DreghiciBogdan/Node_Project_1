import * as yup from 'yup';

const digitsOnly = (value) => /^\d+$/.test(value)
export const userSchema = yup.object({
    username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters long'),
    email:yup.string().email('Not an email format').min(5, 'Email must be a valid email'),
    password:yup.string().required('Password is required').matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/, 'Password needs one special character',),
    phone:yup.string().required('Phone is required').min(10, 'Phone must have 10 digits').max(10, 'Phone must have 10 digits')
        .test('Digits only', 'The field should have only digits', digitsOnly)
});

export const recipeSchema = yup.object({
    name: yup.string().required('Name is required').min(3, 'Too short'),
    description: yup.string().required('Description is required').min(20, 'Not detailed enough'),
    ingredients: yup.array(yup.object({}), 'It has to haave multiple ingredients'),
    calories:yup.string().required('Phone is required').test('Digits only', 'The field should have only digits', digitsOnly)
})
