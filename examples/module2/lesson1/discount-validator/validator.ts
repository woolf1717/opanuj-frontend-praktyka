export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];
  if (!firstName || firstName.length < 1) {
    errors.push('First name is required');
  }

  if (!lastName || lastName.length < 1) {
    errors.push('Last name is required');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }
  if (Number.isNaN(age)) {
    throw new Error('Age must be a number');
  }

  return errors;
}
