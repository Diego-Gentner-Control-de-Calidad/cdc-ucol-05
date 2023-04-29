const { registrarAsistencia } = require('./blackBox');

describe('registrarAsistencia', () => {
  it('calcula la asistencia correctamente para un estudiante de grado 1 y grupo K', () => {
    const asistencia = registrarAsistencia('José Pérez Sánchez', '87654321', '1K');
    expect(asistencia).toEqual({
      nombreCompleto: 'José Pérez Sánchez',
      numeroCuenta: '87654321',
      gradoGrupo: '1K',
      asistencia: 1
    });
  });

  it('calcula la asistencia correctamente para un estudiante de grado 3 y grupo D', () => {
    const asistencia = registrarAsistencia('Ana González Torres', '76543210', '3D');
    expect(asistencia).toEqual({
      nombreCompleto: 'Ana González Torres',
      numeroCuenta: '76543210',
      gradoGrupo: '3D',
      asistencia: 1
    });
  });

  it('calcula la asistencia correctamente para un estudiante de grado 7 y grupo F', () => {
    const asistencia = registrarAsistencia('Carlos Sánchez García', '23456789', '7F');
    expect(asistencia).toEqual({
      nombreCompleto: 'Carlos Sánchez García',
      numeroCuenta: '23456789',
      gradoGrupo: '7F',
      asistencia: 3
    });
  });

  it('lanza un error si el número de cuenta no tiene 8 dígitos', () => {
    expect(() => registrarAsistencia('Juan Pérez González', '1234567', '2A')).toThrow('El número de cuenta debe tener 8 dígitos');
  });

  it('lanza un error si el número de cuenta no es numérico', () => {
    expect(() => registrarAsistencia('Juan Pérez González', '1234567a', '2A')).toThrow('El número de cuenta debe tener 8 dígitos');
  });

  it('lanza un error si el grado y grupo no tiene el formato correcto', () => {
    expect(() => registrarAsistencia('Juan Pérez González', '12345678', '2')).toThrow('El grado y grupo debe tener el formato 1A, 1B, 2A, etc.');
  });

  it('lanza un error si el grupo es 7G', () => {
    expect(() => registrarAsistencia('Juan Pérez González', '12345678', '7')).toThrow();
  });
});
