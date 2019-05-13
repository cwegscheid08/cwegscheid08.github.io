Rails.application.routes.draw do
  root 'static_pages#home'
  get '/about', to: 'static_pages#about'
  get '/services', to: 'static_pages#services'
  get '/contact', to: 'static_pages#contact'
end
