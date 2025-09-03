// models/banner.js
import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
  image_uri: String,
  alt_text: String
});

const Banner = mongoose.model('Banner', bannerSchema);
export default Banner;
