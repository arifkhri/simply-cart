export interface ILocalDataContext {
  store: {
    showConfigModal: boolean;
    configData: {
      chatBotData: IMessageData[];
    };
    conversationData: IConversationData[];
  };
  dispatch: any;
}

export interface IConfigForm extends IMessageData {
  criteriaInput: string;
}

export interface IConversationData extends Pick<IMessageData, 'message'> {
  type: 'user' | 'bot';
}

export interface IMessageData {
  message: string;
  criteria: string[];
}

export interface IModal {
  open: boolean;
  content?: JSX.Element;
  title?: string;
}

export type BaseProps = React.AllHTMLAttributes<any>;

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
