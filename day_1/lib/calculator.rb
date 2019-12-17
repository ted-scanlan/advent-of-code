

input = File.readlines("input.txt")
total = 0

def fuel_calulator(input)
  result = (((input/3).floor(0))-2)
  return result
end

input.each {|num|
  each_total = 0
  current_amount = num[0..-2].strip.to_i

  while current_amount > 0 do
    fuel = fuel_calulator(current_amount)
    each_total += fuel if fuel > 0
    current_amount = fuel
  end
  total += each_total
}

p total
