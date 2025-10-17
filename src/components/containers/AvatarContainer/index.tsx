import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

import { Avatar } from '@/components/pieces/avatar';

const AvatarContainer = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage
          sizes="xl"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarContainer;
