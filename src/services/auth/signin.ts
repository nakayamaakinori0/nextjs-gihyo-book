//typesは後ほど定義
import { ApiContext, User } from 'types'
//先ほど定義したsrc/utils/index.tsから読み込み
import { fetcher } from 'utils'

export type SigninParams = {
  /**
   * ユーザ名
   * サンプルユーザのユーザ名は"user"
   */
  username: string
  /**
   * パスワード
   * サンプルユーザのパスワードは"password"
   */
  password: string
}

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザ
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
