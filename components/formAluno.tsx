import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import { getApi } from "../services/axios";

function FormAluno(props: any) {
  const { register, handleSubmit } = useForm(props.data);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    setData(props.data)
  })

  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:col-span-1 md:mt-0">
            <div className="md:col-span-1 py-5">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Informações Pessoais
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Informações gerais sobre o aluno.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(props.handleFormSubmit)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Foto
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Alterar
                        </button>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nome
                      </label>
                      <input
                        {...register("nome")}
                        type="text"
                        name="nome"
                        id="nome"
                        defaultValue={data ? data.nome : null}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="sobrenome"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sobrenome
                      </label>
                      <input
                        {...register("sobrenome")}
                        type="text"
                        name="sobrenome"
                        id="sobrenome"
                        defaultValue={data ? data.sobrenome : null}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="cpf"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cpf
                      </label>
                      <input
                        {...register("cpf")}
                        type="text"
                        name="cpf"
                        id="cpf"
                        defaultValue={data ? data.cpf : null}
                        autoComplete="cpf"
                        placeholder="000.000.000-00"
                        className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="telefone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telefone/Celular
                      </label>
                      <input
                        {...register("telefone")}
                        type="text"
                        name="telefone"
                        id="telefone"
                        defaultValue={data ? data.telefone : null}
                        autoComplete="phone"
                        placeholder="(00) 00000-0000"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        {...register("email")}
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={data ? data.email : null}
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="cor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cor
                      </label>
                      <select
                        {...register("cor")}
                        id="cor"
                        name="cor"
                        defaultValue={data ? data.cor : null}
                        autoComplete="cor"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                      >
                        <option value="branco">Branco</option>
                        <option value="negro">Negro</option>
                        <option value="pardo">Pardo</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="sexo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sexo
                      </label>
                      <select
                        {...register("sexo")}
                        id="sexo"
                        name="sexo"
                        defaultValue={data ? data.sexo : null}
                        autoComplete="sexo"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                      >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="pais"
                        className="block text-sm font-medium text-gray-700"
                      >
                        País
                      </label>
                      <select
                        {...register("pais")}
                        id="pais"
                        name="pais"
                        defaultValue={data ? data.pais : null}
                        autoComplete="country"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="rua"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Rua
                      </label>
                      <input
                        {...register("rua")}
                        type="text"
                        name="rua"
                        id="rua"
                        defaultValue={data ? data.rua : null}
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="estado"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Estado
                      </label>
                      <input
                        {...register("estado")}
                        type="text"
                        name="estado"
                        id="estado"
                        defaultValue={data ? data.estado : null}
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="cidade"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cidade
                      </label>
                      <input
                        {...register("cidade")}
                        type="text"
                        name="cidade"
                        id="cidade"
                        defaultValue={data ? data.cidade : null}
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="cep"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CEP
                      </label>
                      <input
                        {...register("cep")}
                        type="text"
                        name="cep"
                        id="cep"
                        defaultValue={data ? data.cep : null}
                        autoComplete="postal-code"
                        placeholder="00000-00"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Profile
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company-website"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Website
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                http://
                              </span>
                              <input
                                type="text"
                                name="company-website"
                                id="company-website"
                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm block w-full px-5 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                                placeholder="www.example.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            About
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm |||||||||| px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-1"
                              placeholder="you@example.com"
                              defaultValue={""}
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description for your profile. URLs are
                            hyperlinked.
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Cover photo
                          </label>
                          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Notifications
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Decide which communications you'd like to receive and how.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <fieldset>
                          <legend className="sr-only">By Email</legend>
                          <div
                            className="text-base font-medium text-gray-900"
                            aria-hidden="true"
                          >
                            By Email
                          </div>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="comments"
                                  name="comments"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="comments"
                                  className="font-medium text-gray-700"
                                >
                                  Comments
                                </label>
                                <p className="text-gray-500">
                                  Get notified when someones posts a comment on
                                  a posting.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="candidates"
                                  className="font-medium text-gray-700"
                                >
                                  Candidates
                                </label>
                                <p className="text-gray-500">
                                  Get notified when a candidate applies for a
                                  job.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="offers"
                                  className="font-medium text-gray-700"
                                >
                                  Offers
                                </label>
                                <p className="text-gray-500">
                                  Get notified when a candidate accepts or
                                  rejects an offer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend className="contents text-base font-medium text-gray-900">
                            Push Notifications
                          </legend>
                          <p className="text-sm text-gray-500">
                            These are delivered via SMS to your mobile phone.
                          </p>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="push-everything"
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                Everything
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="push-email"
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                Same as email
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="push-nothing"
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                No push notifications
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
    </div>
  );
}

export default FormAluno;
