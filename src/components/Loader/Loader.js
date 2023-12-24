import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ marginLeft: '50%' }}>
      <InfinitySpin width="200" color="#f18100" />
    </div>
  );
};
