import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with an invalid email', () => {
    expect(validateEmptyAndEmail('test@')).toBe('*E-mail não é válido')
  })

  it('should return true when input a correct email', () => {
    expect(validateEmptyAndEmail('test@me.com')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no minimo 3 caracteres')
  })

  it('should return true when input pass a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })
})
