function registrarAsistencia(nombreCompleto, numeroCuenta, gradoGrupo) {
    // Validar que el número de cuenta tenga 8 dígitos
    if (numeroCuenta.length !== 8 || isNaN(numeroCuenta)) {
      throw new Error('El número de cuenta debe tener 8 dígitos');
    }

    // Validar que el grado y grupo tenga el formato correcto
    const regexGradoGrupo = /^[1-8][A-K]$/;
    if (!regexGradoGrupo.test(gradoGrupo)) {
      throw new Error('El grado y grupo debe tener el formato 1A, 1B, 2A, etc.');
    }

    let asistencia = 1;
    if (['A', 'B', 'C'].includes(gradoGrupo[1])) {
      asistencia *= 2;
    }
    if (parseInt(gradoGrupo[0]) >= 4) {
      asistencia *= 3;
    }
    if (gradoGrupo === '7G') {
      asistencia = 0;
    }

    return {
      nombreCompleto,
      numeroCuenta,
      gradoGrupo,
      asistencia
    };
  }

  module.exports = {
    registrarAsistencia
  };
