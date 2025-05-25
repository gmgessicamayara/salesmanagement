package io.github.gmgessicamayara.vendasapi.rest.dashboard;

import io.github.gmgessicamayara.vendasapi.repository.CustomerRepository;
import io.github.gmgessicamayara.vendasapi.repository.ProductRepository;
import io.github.gmgessicamayara.vendasapi.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("api/dashboard")
public class DashboardController {

    @Autowired
    private SaleRepository saleRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public DashboardData getDashboard() {
        long salesCount = saleRepository.count();
        long productCount = productRepository.count();
        long customerCount = customerRepository.count();
        var salesByMonth = saleRepository.getMonthlySalesTotal(LocalDate.now().getYear());
        return new DashboardData(salesCount, productCount, customerCount, salesByMonth);
    }


}



