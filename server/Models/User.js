import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    phone: {
       type: String,
       validate: {
           validator: function(v) {
               // Пример проверки на формат российского номера телефона
               // Допустимые форматы: +7(XXX)XXX-XX-XX, +7 XXX XXX-XX-XX, 8(XXX)XXX-XX-XX, 8 XXX XXX-XX-XX
               return /^(?:\+7|8)\s?\(?(\d{3})\)?[\s-]?(\d{3})-?(\d{2})-?(\d{2})$/.test(v);
           },
           message: props => `${props.value} is not a valid Russian phone number!`
       },
       required: true
    }
 
})

export default mongoose.model('User', User)