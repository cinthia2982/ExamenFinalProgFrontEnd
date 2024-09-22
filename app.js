new Vue({
    el: '#app',
    data: {
        activeTab: 'calculo',  // Para gestionar las pestañas
        nota1: '',
        nota2: '',
        nota3: '',
        asistencia: '',
        resultado: '',
        nombre: '',
        correo: '',
        contrasena: '',
        repetirContrasena: ''
    },
    methods: {
        validateNotas() {
            if (this.nota1 < 10 || this.nota1 > 70) {
                alert('Nota 1 debe ser un valor entre 10 y 70');
                this.nota1 = '';  // Limpiar el valor no válido
            }
            if (this.nota2 < 10 || this.nota2 > 70) {
                alert('Nota 2 debe ser un valor entre 10 y 70');
                this.nota2 = '';  // Limpiar el valor no válido
            }
            if (this.nota3 < 10 || this.nota3 > 70) {
                alert('Nota 3 debe ser un valor entre 10 y 70');
                this.nota3 = '';  // Limpiar el valor no válido
            }
        },
        validateAsistencia() {
            if (this.asistencia < 0 || this.asistencia > 100) {
                alert('Asistencia debe ser un valor entre 0 y 100');
                this.asistencia = '';  // Limpiar el valor no válido
            }
        },
        calcular() {
            // Primero aseguramos que todas las notas sean válidas
            this.validateNotas();

            // Aseguramos que la asistencia sea válida
            this.validateAsistencia();

            // Si hay notas vacías después de las validaciones, no continuar
            if (this.nota1 === '' || this.nota2 === '' || this.nota3 === '' || this.asistencia === '') {
                alert('Debe completar todos los campos con valores válidos');
                return;
            }

            // Cálculo del promedio ponderado
            let promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);

            if (promedio >= 40 && this.asistencia >= 80) {
                this.resultado = `Promedio: ${promedio.toFixed(2)} - Aprobado`;
            } else {
                this.resultado = `Promedio: ${promedio.toFixed(2)} - Reprobado`;
            }
        },
        validateNombre() {
            if (!this.nombre) {
                alert('El nombre no puede estar vacío');
            }
        },
        validateCorreo() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.correo)) {
                alert('Debe ingresar un correo válido');
            }
        },
        enviarRegistro() {
            if (!this.nombre || !this.correo || !this.contrasena || !this.repetirContrasena) {
                alert('Debe completar todos los campos');
                return;
            }
            if (this.contrasena !== this.repetirContrasena) {
                alert('Las contraseñas no coinciden');
                return;
            }
            alert('El registro se ha realizado correctamente');
        }
    }
});

