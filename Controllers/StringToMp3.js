const gTTS = require("gtts");

export const StringToMp3Controller = async (req, res) => {
    const { Name, Turn } = req.body;
    try {
        const gtts = new gTTS(`Turno ${Turn} ${Name}`, "es");
        res.setHeader("Content-Type", "audio/mpeg");
        gtts.stream().pipe(res);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
