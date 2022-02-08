import { Upload } from 'react-feather';

// import scss
import './uploadAvatar.scss';

const UploadAvatar = () => (
  <div className="upload-avatar">
    <label htmlFor="upload-avatar">
      <Upload />
      <input id="upload-avatar" name="upload-avatar" type="file" />
    </label>
  </div>
);

export default UploadAvatar;
