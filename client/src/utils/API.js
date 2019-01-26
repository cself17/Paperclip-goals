import axios from "axios";

export default {
	getAllJars: function() {
		return axios.get("/api/jar");
	},
	getJarById: function(id) {
		return axios.get("/api/jar/" + id)
	},
	addpaperclip: function(id) {
		return axios.put("/api/jar/" + id + "/addpaperclip");
	}
}

