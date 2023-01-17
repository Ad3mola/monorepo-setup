import React from 'react';

export const RemoveIcon = ({ color }: { color?: string }): JSX.Element => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 0.457397C9.62663 0.457397 7.30655 1.16119 5.33316 2.47976C3.35977 3.79834 1.8217 5.67248 0.913451 7.86519C0.00519941 10.0579 -0.232441 12.4707 0.230582 14.7985C0.693605 17.1263 1.83649 19.2644 3.51472 20.9427C5.19295 22.6209 7.33115 23.7638 9.65892 24.2268C11.9867 24.6898 14.3995 24.4522 16.5922 23.5439C18.7849 22.6357 20.6591 21.0976 21.9776 19.1242C23.2962 17.1508 24 14.8308 24 12.4574C23.9963 9.27593 22.7309 6.22582 20.4812 3.97618C18.2316 1.72654 15.1815 0.461075 12 0.457397ZM16.345 15.4971C16.4308 15.5827 16.4989 15.6845 16.5454 15.7965C16.5919 15.9085 16.6159 16.0286 16.616 16.1499C16.616 16.2712 16.5922 16.3913 16.5458 16.5034C16.4994 16.6154 16.4314 16.7173 16.3456 16.803C16.2599 16.8888 16.1581 16.9568 16.046 17.0032C15.9339 17.0496 15.8138 17.0734 15.6925 17.0734C15.5712 17.0733 15.4511 17.0493 15.3391 17.0028C15.2271 16.9563 15.1253 16.8882 15.0397 16.8023L12 13.7627L8.96034 16.8023C8.78718 16.9751 8.55252 17.0721 8.3079 17.072C8.06328 17.0719 7.82872 16.9746 7.65575 16.8017C7.48277 16.6287 7.38554 16.3941 7.38541 16.1495C7.38528 15.9049 7.48226 15.6702 7.65505 15.4971L10.6947 12.4574L7.65505 9.41773C7.48226 9.24458 7.38528 9.00991 7.38541 8.76529C7.38554 8.52067 7.48277 8.28611 7.65575 8.11314C7.82872 7.94017 8.06328 7.84294 8.3079 7.8428C8.55252 7.84267 8.78718 7.93966 8.96034 8.11244L12 11.1521L15.0397 8.11244C15.2128 7.93966 15.4475 7.84267 15.6921 7.8428C15.9367 7.84294 16.1713 7.94017 16.3443 8.11314C16.5172 8.28611 16.6145 8.52067 16.6146 8.76529C16.6147 9.00991 16.5177 9.24458 16.345 9.41773L13.3053 12.4574L16.345 15.4971Z"
        fill={color ? color : '#C11E22'}
      />
    </svg>
  );
};