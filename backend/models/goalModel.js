const mongose = require('mongoose')

const goalSchema = mongose.Schema(
    {
        text : {
            type: String,
            required: [true, 'Please add a text field']
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongose.model('Goal', goalSchema)