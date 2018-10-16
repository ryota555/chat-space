require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do
      it 'contentがあれば保存出来る' do
        expect(bulid(:message, image: nill)).to be_valid
      end

      it 'imageがあれば保存できる' do
        expect(bulid(:message, content: nill)).to be_valid
      end

      it 'content,imageが両方あれば保存できる' do
        expect(bulid(:message)).to be_valid
      end
    end

    context 'can not save' do
      it 'contentもimageも無いと保存できない' do
        message = bulid(:message, content: nill, image: nill)
        message.valid?
        expect(message.errors[:content]).to include('を入力してください')
      end

      it 'is invalid without group_id' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end
      it 'is invaid without user_id' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end

    end
  end
end
