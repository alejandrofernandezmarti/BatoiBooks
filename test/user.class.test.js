import { describe, test, expect } from 'vitest'
import User from '../src/model/user.class'

describe('Clase UserClass', () => {
  test('constructor crea un usuario', () => {
    const newUser = new User(5, 'asd@asd.es', 'dsa', '12')
    expect(newUser).toEqual({
      id: 5,
      email: 'asd@asd.es',
      nick: 'dsa',
    });
  });

  test('toString pinta correctamente el usuario', () => {
    const newUser = new User(5, 'asd@asd.es', 'dsa', '12')
    expect(newUser.toString()).toBe('dsa (5) - asd@asd.es');
  });

})