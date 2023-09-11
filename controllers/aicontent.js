const OpenAi=require('openai')
const dotenv=require('dotenv')
dotenv.config()

const openai=new OpenAi({
    apiKey:process.env.OPENAI_API_KEY
})

const titlegen=async(req,res)=>{
    try {
        const chatcompletion=await openai.chat.completions.create({
            messages:[{role:"user",content:`give me some titles for my blog on the topic ${req.body.msg}`}],
            model:"gpt-3.5-turbo"
        })
        res.send(chatcompletion.choices[0].message.content)
    } catch (error) {
        res.status(500).send("server error")
    }
}

const ideasgen=async(req,res)=>{
    try {
        const chatcompletion=await openai.chat.completions.create({
            messages:[{role:"user",content:`give me some ideas to brainstorm for my blog on the topic ${req.body.msg}`}],
            model:"gpt-3.5-turbo"
        })
        res.send(chatcompletion.choices[0].message.content) 
    } catch (error) {
        res.status(500).send("server error")
    }
}

const gmore=async(req,res)=>{
    try {
        const chatcompletion=await openai.chat.completions.create({
            messages:[{role:"user",content:`give me some more`}],
            model:"gpt-3.5-turbo"
        })
        res.send(chatcompletion.choices[0].message.content) 
    } catch (error) {
        res.status(500).send("server error")
    }
}

exports.titlegen=titlegen
exports.ideasgen=ideasgen
exports.gmore=gmore

