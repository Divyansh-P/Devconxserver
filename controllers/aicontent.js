const OpenAI=require('openai')
const dotenv=require('dotenv')
dotenv.config()

const openai=new OpenAI({
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
            messages:[{role:"user",content:`give me some ideas to brainstorm for my blog on the topic ${req.body.msg} in detail`}],
            model:"gpt-3.5-turbo"
        })
        res.send(chatcompletion.choices[0].message.content) 
    } catch (error) {
        res.status(500).send("server error")
    }
}
const taggen=async(req,res)=>{
    try {
        const chatcompletion=await openai.chat.completions.create({
            messages:[{role:"user",content:`give me some hashtags for my blog : ${req.body.msg}`}],
            model:"gpt-3.5-turbo"
        })
        res.send(chatcompletion.choices[0].message.content) 
    } catch (error) {
        res.status(500).send("server error")
    }
}
const analysegen=async(req,res)=>{
    try {
        const chatcompletion=await openai.chat.completions.create({
            messages:[{role:"user",content:`analyse my blog and tell me readability of my blog and how can i improve it.The blog is as follow : ${req.body.msg}`}],
            model:"gpt-3.5-turbo"
        })
        res.send(chatcompletion.choices[0].message.content) 
    } catch (error) {
        res.status(500).send("server error")
    }
}
const conclusiongen=async(req,res)=>{
    try {
        const chatcompletion=await openai.chat.completions.create({
            messages:[{role:"user",content:`provide me with a suitable conclusion for my blog given below : ${req.body.msg}`}],
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
exports.taggen=taggen
exports.analysegen=analysegen
exports.conclusiongen=conclusiongen